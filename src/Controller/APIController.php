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
        $response = $httpClient->request('GET', 'https://api.opencorporates.com/v0.4/companies/us_va/05501796/statements?api_token=LndrOC38xehzcVPXfIfe');

        $statusCode = $response->getStatusCode();
        // $statusCode = 200
        dump($statusCode);
        $content = $response->getContent();

        $resultat = json_decode($content);

        //$pepitoCompanyName = $resultat->results->company->name;

        //$pepitoCompanyCountry = $resultat->results->company->jurisdiction_code;

        $pepitoCompanySubsNames = $resultat->results->statements;

        //$pepitoCompanySubsName = [$pepitoCompanySubsNames->statement->properties->subsidiary->name];

        //foreach($pepitoCompanySubsNames as $pepitoCompanySubsName)
        //{
        //    $pepitoCompanySubsNames[$pepitoCompanySubsName->statement->properties->subsidiary->name];
        //}

    
        //->statement->properties->subsidiary->name;
        // returns the raw content returned by the server (JSON in this case)
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        //dump($content);
        $content = $response->toArray();
        // transforms the response JSON content into a PHP array
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        //dd($pepitoCompanySubsNames);

        return $this->render('api/index.html.twig', [
            //'pepito_company_name' => $pepitoCompanyName,
            //'pepito_company_country' => $pepitoCompanyCountry,
            'pepito_company_subs' => $pepitoCompanySubsNames,
        ]);
    }
}
