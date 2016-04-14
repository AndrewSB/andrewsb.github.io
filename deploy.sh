#/!bin/bash

motion build

function joinStrings { local d=$1; shift; echo -n "$1"; shift; printf "%s" "${@/#/$d}"; }

domains=( "http://andrewsb.me" "http://ndrew.me" "http://swagso.sexy" )
# domainStrings= joinStrings ', ' ${domains[*]}

for domain in "${domains[@]}"; do
	surge .motion/build $domain &
done

echo deploying 🙂 

wait
echo 🤑
