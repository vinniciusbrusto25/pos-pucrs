FROM ubuntu

# esta construção garante que o apt update seja sempre forçado
# a atualizar sempre que adicionar um novo comando apt install
# pois o comando foi modificado, com isso, não vai usar do cache
RUN apt update && apt install curl --yes && apt install net-tools --yes