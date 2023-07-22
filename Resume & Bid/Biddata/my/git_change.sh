git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Marcin Rabenda" ];
        then
                GIT_COMMITTER_NAME="TopDevs2022";
                GIT_AUTHOR_NAME="TopDevs2022";
                GIT_COMMITTER_EMAIL="sotaro.yoshimoto@gmail.com";
                GIT_AUTHOR_EMAIL="sotaro.yoshimoto@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD