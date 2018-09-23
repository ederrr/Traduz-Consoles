<?php
include("ClassConexao.php");

class ClassGames extends ClassConexao{

    #Exibição dos game em um json
    public function exibeConsoles()
    {
        $BFetch=$this->conectaDB()->prepare("select * from games");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['Id'],
                "titulo"=>$Fetch['Nome'],
                "subtitulo"=>$Fetch['Subtitulo'],
                //"status"=>$Fetch['Status'],
                "plataforma"=>$Fetch['Plataforma'],
                "responsavel"=>$Fetch['Responsavel'],
                //"observacoes"=>$Fetch['Observacoes'],
                "download"=>$Fetch['Download'],
                "capa"=>$Fetch['Capa'],
                
               
            ];
            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}