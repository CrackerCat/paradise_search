<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\JsonResponse;

class APIController extends AbstractController
{
    /**
     * @Route("/api", name="id_api")
     */
    public function index(): Response
    {

        $resultatStatements = $this->getResultApi('https://api.opencorporates.com/v0.4/companies/us_va/05501796/statements?api_token=LndrOC38xehzcVPXfIfe&per_page=100');

        $MondelezSubsNames = $resultatStatements->results->statements;
        $MondelezSubsCount = $resultatStatements->results->total_count;

        // returns the raw content returned by the server (JSON in this case)
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        //dump($content);
        //$contentStatements = $responseStatements->toArray();
        // transforms the response JSON content into a PHP array
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        

        $resultat = $this->getResultApi('https://api.opencorporates.com/v0.4/companies/us_va/05501796?api_token=LndrOC38xehzcVPXfIfe&per_page=100');
        
        
        $MondelezName = $resultat->results->company->name;
        $MondelezCountry = $resultat->results->company->jurisdiction_code;
        $MondelezCreation = $resultat->results->company->incorporation_date;

        $MondelezSanctions = $this->getResultApi('https://aleph.occrp.org/api/2/collections/1306?filter:schema=LegalEntity');

        $MondelezResultatSanctions = $MondelezSanctions->statistics->schema->values->Sanction;

        // dd($MondelezSanctions);

        // dd($resultatCompany);
        //dd($MondelezCompanySanctionsCheck);

        //return $this->render('api/index.html.twig', [
        return new JsonResponse([
            'Mondelez_name' => $MondelezName,
            'Mondelez_country' => $MondelezCountry,
            'Mondelez_subs' => $MondelezSubsNames,
            'Mondelez_subs_count' => $MondelezSubsCount,
            'Mondelez_creation' => $MondelezCreation,
            'Mondelez_sanction' => $MondelezResultatSanctions,
        ]);
    }

    private function getResultApi(string $url)
    {
        $httpClient = HttpClient::create();
        
        $responseCompany = $httpClient->request('GET', $url);

        $statusCode = $responseCompany->getStatusCode();
        // $statusCode = 200
        //dump($statusCode);

        $contentCompany = $responseCompany->getContent();

        return json_decode($contentCompany);
    }
}
