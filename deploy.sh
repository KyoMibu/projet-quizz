set -env
npm run build

cd dist

git init
git add -A
git commid -m 'deploy'

git push -f git@github.com:KyoMibu/projet-quizz.git main:gh-pages

cd -