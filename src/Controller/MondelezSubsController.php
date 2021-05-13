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
        
        //filtering the fetched data from database with tax haven list and ordering them alphabetically
        $subsresultOne = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 0);

        //creation of an array to put the data in
        $subsendresultsOne = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultOne)-1; $i++) {
            $subspush = array('subsname' => $subsresultOne[$i]->getSubsName(), 'subscountry' => $subsresultOne[$i]->getSubsCountry());
            array_push($subsendresultsOne, $subspush);
        } 



        $subsresultTwo = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 10);

        //creation of an array to put the data in
        $subsendresultsTwo = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultTwo)-1; $i++) {
            $subspush = array('subsname' => $subsresultTwo[$i]->getSubsName(), 'subscountry' => $subsresultTwo[$i]->getSubsCountry());
            array_push($subsendresultsTwo, $subspush);
        } 


        $subsresultThree = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 20);

        //creation of an array to put the data in
        $subsendresultsThree = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultThree)-1; $i++) {
            $subspush = array('subsname' => $subsresultThree[$i]->getSubsName(), 'subscountry' => $subsresultThree[$i]->getSubsCountry());
            array_push($subsendresultsThree, $subspush);
        } 


        $subsresultFour = $repository->findBy(array(
            'subscountry' => $taxhavens
        ), array(
            'subsname' => 'Desc',
        ), 10, 30);
        //dd($subsresult);

        //creation of an array to put the data in
        $subsendresultsFour = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultFour)-1; $i++) {
            $subspush = array('subsname' => $subsresultFour[$i]->getSubsName(), 'subscountry' => $subsresultFour[$i]->getSubsCountry());
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
