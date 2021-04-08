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

        $resultatStatements = $this->getResultApi('https://api.opencorporates.com/v0.4/companies/us_va/05501796/statements?api_token=LndrOC38xehzcVPXfIfe');

        $pepitoCompanySubsNames = $resultatStatements->results->statements;
        $pepitoCompanySubsCount = $resultatStatements->results->total_count;

        // returns the raw content returned by the server (JSON in this case)
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        //dump($content);
        //$contentStatements = $responseStatements->toArray();
        // transforms the response JSON content into a PHP array
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        

        $resultatCompany = $this->getResultApi('https://api.opencorporates.com/v0.4/companies/us_va/05501796?api_token=LndrOC38xehzcVPXfIfe');
        
        $pepitoCompanyName = $resultatCompany->results->company->name;
        $pepitoCompanyCountry = $resultatCompany->results->company->jurisdiction_code;
        $pepitoCompanyCreation = $resultatCompany->results->company->incorporation_date;

        $resultatSanctions = $this->getResultApi('https://aleph.occrp.org/api/2/collections/1306?filter:schema=LegalEntity');

        $pepitoCompanySanctionsCheck = $resultatSanctions->statistics->names->values;

        //dd($pepitoCompanySanctionsCheck);

        //return $this->render('api/index.html.twig', [
        return new JsonResponse([  
            'pepito_company_name' => $pepitoCompanyName,
            'pepito_company_country' => $pepitoCompanyCountry,
            'pepito_company_subs' => $pepitoCompanySubsNames,
            'pepito_company_subs_count' => $pepitoCompanySubsCount,
            'pepito_company_creation' => $pepitoCompanyCreation,
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
