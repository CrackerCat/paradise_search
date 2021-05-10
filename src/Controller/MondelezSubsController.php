<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request as HttpFoundationRequest;
use App\Repository\MondelezSubsRepository;
use App\Entity\MondelezSubs;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class MondelezSubsController extends AbstractController
{
    /**
     * @Route("/mondelez/subs", name="mondelez_subs")
     */
    public function index(HttpFoundationRequest $request, EntityManagerInterface $entityManager): Response
    {
        $repository = $entityManager->getRepository(MondelezSubs::class);

        //list of tax havens, to use as filter for fetched data (as listed by Oxfam here https://www.oxfamfrance.org/communiques-de-presse/liste-noire-des-paradis-fiscaux-lunion-europeenne-doit-faire-pression-sur-les-pays-les-plus-nocifs/)
        $taxhavens = ['Panama', 'Netherlands', 'Switzerland', 'Bermuda', 'Cayman Islands', 'Singapour', 'Irland','Luxemburg', 'Curaçao', 'Hong Kong', 'Cyprus', 'Bahamas', 'Jersey', 'Barbados', 'Mauritius', 'British Virgin Islands'];
        
        //filtering the fetched data from database with tax haven list and ordering them alphabetically
        $subsresult = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc'
        ));
        //dd($subsresult);

        //creation of an array to put data from column subsname in  
        $subsname = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresult)-1; $i++) {
            array_push($subsname, $subsresult[$i]->getSubsName());
        } 
        
        //creation of an array to put data from column subscountry in 
        $subscountry = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresult)-1; $i++) {
            array_push($subscountry, $subsresult[$i]->getSubsCountry());
        }
        
        //dd($subsresult->getSubsName());

        //alternative: to show the fetched data on the Twig page
        //return $this->render('mondelez_subs/index.html.twig', [
        //    'subs' => $subsname,
        //]);
        
        //sending the data fetched from database to the page with url /mondelez/subs
        return new JsonResponse([
            'Mondelez_subsname' => $subsname,
            'Mondelez_subscountry' => $subscountry,
        ]);
    }
}
