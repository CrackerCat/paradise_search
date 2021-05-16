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
        
        //
        //TEMPORARY SOLUTION BEFORE IMPLMENTING CORRECT PAGINATION WITH CURRENTPAGE TRANSFERRED FROM AGENDA COMPONENT VIA GET
        //
        
        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultsOne = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 0);

        //creation of an array to put the data in
        $subsendresultsOne = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultsOne)-1; $i++) {
            $subspush = array('subsname' => $subsresultsOne[$i]->getSubsName(), 'subscountry' => $subsresultsOne[$i]->getSubsCountry());
            array_push($subsendresultsOne, $subspush);
        } 

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultsTwo = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 10);

        //creation of an array to put the data in
        $subsendresultsTwo = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultsTwo)-1; $i++) {
            $subspush = array('subsname' => $subsresultsTwo[$i]->getSubsName(), 'subscountry' => $subsresultsTwo[$i]->getSubsCountry());
            array_push($subsendresultsTwo, $subspush);
        } 

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultsThree = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 20);

        //creation of an array to put the data in
        $subsendresultsThree = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultsThree)-1; $i++) {
            $subspush = array('subsname' => $subsresultsThree[$i]->getSubsName(), 'subscountry' => $subsresultsThree[$i]->getSubsCountry());
            array_push($subsendresultsThree, $subspush);
        } 

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultsFour = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 30);
        //dd($subsresult);

        //creation of an array to put the data in
        $subsendresultsFour = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultsFour)-1; $i++) {
            $subspush = array('subsname' => $subsresultsFour[$i]->getSubsName(), 'subscountry' => $subsresultsFour[$i]->getSubsCountry());
            array_push($subsendresultsFour, $subspush);
        } 
        //dd($subsendresults);

        //alternative: to show the fetched data on the Twig page
        //return $this->render('mondelez_subs/index.html.twig', [
        //    'subs' => $subsname,
        //]);
        
        //sending the data fetched from database to the url /mondelez/subs
        return new JsonResponse([
            'Mondelez_subs_one' => $subsendresultsOne,
            'Mondelez_subs_two' => $subsendresultsTwo,
            'Mondelez_subs_three' => $subsendresultsThree,
            'Mondelez_subs_four' => $subsendresultsFour
        ]);
    }
}
