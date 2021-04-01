<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;

class APIController extends AbstractController
{
    /**
     * @Route("/api", name="id_api")
     */
    public function index(): Response
    {

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', 'https://api.opencorporates.com/v0.4/companies/us_va/05501796?api_token=LndrOC38xehzcVPXfIfe');

        $statusCode = $response->getStatusCode();
        // $statusCode = 200
        dump($statusCode);
        $content = $response->getContent();

         $resultat = json_decode($content);

         echo $resultat->results->company->name ;
        // returns the raw content returned by the server (JSON in this case)
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        //dump($content);
        $content = $response->toArray();
        // transforms the response JSON content into a PHP array
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        dd($content);

        return $this->render('api/index.html.twig', [
            'controller_name' => 'APIController',
        ]);
    }
}
