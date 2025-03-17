#!/bin/bash

# Function to display menu
show_menu() {
    echo "=================================="
    echo "   🚀 Git Interactive Script"
    echo "=================================="
    echo "1) Create a new branch from 'main'"
    echo "2) Add all changes & commit"
    echo "3) Merge the branch into 'main'"
    echo "4) Exit"
    echo "=================================="
    echo -n "Enter your choice [1-4]: "
}

# Function to check if inside a Git repository
check_git_repo() {
    if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
        echo "❌ Not a Git repository. Please navigate to a valid repo."
        exit 1
    fi
}

# Function to create a new branch from main
create_branch() {
    echo -n "Enter the new branch name: "
    read branch_name
    git checkout main || git checkout master
    git pull origin main || git pull origin master
    git checkout -b "$branch_name"
    echo "✅ Branch '$branch_name' created from 'main'."
}

# Function to add and commit changes
commit_changes() {
    git add .
    echo -n "Enter commit message: "
    read commit_msg
    git commit -m "$commit_msg"
    echo "✅ Changes committed with message: '$commit_msg'."
}

# Function to merge the branch back into main
merge_branch() {
    current_branch=$(git branch --show-current)
    if [[ "$current_branch" == "main" || "$current_branch" == "master" ]]; then
        echo "❌ You are already on 'main'. Switch to a feature branch first."
        exit 1
    fi

    git checkout main || git checkout master
    git pull origin main || git pull origin master
    git merge "$current_branch"
    
    echo "✅ Branch '$current_branch' merged into 'main'."
    echo -n "Do you want to delete '$current_branch'? (y/n): "
    read delete_branch
    if [[ "$delete_branch" == "y" ]]; then
        git branch -d "$current_branch"
        git push origin --delete "$current_branch"
        echo "🗑️ Branch '$current_branch' deleted."
    fi
}

# Main script logic
check_git_repo

while true; do
    show_menu
    read choice

    case $choice in
        1) create_branch ;;
        2) commit_changes ;;
        3) merge_branch ;;
        4) echo "👋 Exiting..."; exit 0 ;;
        *) echo "❌ Invalid choice. Please enter a number between 1-4." ;;
    esac
done
