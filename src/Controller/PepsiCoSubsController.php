<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request as HttpFoundationRequest;
use App\Repository\PepsiCoSubsRepository;
use App\Entity\PepsiCoSubs;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;

class PepsiCoSubsController extends AbstractController
{
    /**
     * @Route("/pepsico/subs", name="pepsico_subs")
     */
    public function index(HttpFoundationRequest $request, EntityManagerInterface $entityManager): Response
    {
        $repository = $entityManager->getRepository(PepsiCoSubs::class);

        //list of tax havens, to use as filter for fetched data (as listed by Oxfam here: 
            //https://www.oxfamfrance.org/communiques-de-presse/liste-noire-des-paradis-fiscaux-lunion-europeenne-doit-faire-pression-sur-les-pays-les-plus-nocifs/)
        $taxhavensOxfam = ['Panama', 'Netherlands', 'Switzerland', 'Bermuda', 'Cayman Islands', 'Singapour', 'Irland','Luxemburg', 'Curaçao', 'Hong Kong', 'Cyprus', 'Bahamas', 'Jersey', 'Barbados', 'Mauritius', 'British Virgin Islands'];
        
        //list of tax havens, to use as filter for fetched data 
        //(as listed by EU here: https://ec.europa.eu/taxation_customs/tax-common-eu-list_fr)
        $taxhavensEU = ['American Samoa', 'Anguilla', 'Dominica', 'Fiji', 'Guam', 'Palau', 'Panama', 'Samoa', 'Seychelles', 'Trinidad and Tobago', 'US Virgin Islands', 'Vanuatu'];
        
        //
        //TEMPORARY SOLUTION BEFORE IMPLMENTING CORRECT PAGINATION WITH CURRENTPAGE TRANSFERRED FROM AGENDA COMPONENT VIA GET
        //
        
        //filtering the fetched data from database with 
        //EU tax haven list and ordering them alphabetically
        //$subsresultEU = $repository->findBy(array(
        //    'subscountry' => $taxhavensEU
        //), array(
        //    'subsname' => 'Desc',
        //));

        //dd($subsresultEU);
        //returns 2 subsidiaries

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultOne = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
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

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultTwo = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
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
        
        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultThree = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
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

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultFour = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 30);

        //creation of an array to put the data in
        $subsendresultsFour = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultFour)-1; $i++) {
            $subspush = array('subsname' => $subsresultFour[$i]->getSubsName(), 'subscountry' => $subsresultFour[$i]->getSubsCountry());
            array_push($subsendresultsFour, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultFive = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 40);

        //creation of an array to put the data in
        $subsendresultsFive = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultFive)-1; $i++) {
            $subspush = array('subsname' => $subsresultFive[$i]->getSubsName(), 'subscountry' => $subsresultFive[$i]->getSubsCountry());
            array_push($subsendresultsFive, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultSix = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 50);

        //creation of an array to put the data in
        $subsendresultsSix = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultSix)-1; $i++) {
            $subspush = array('subsname' => $subsresultSix[$i]->getSubsName(), 'subscountry' => $subsresultSix[$i]->getSubsCountry());
            array_push($subsendresultsSix, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultSeven = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 60);

        //creation of an array to put the data in
        $subsendresultsSeven = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultSeven)-1; $i++) {
            $subspush = array('subsname' => $subsresultSeven[$i]->getSubsName(), 'subscountry' => $subsresultSeven[$i]->getSubsCountry());
            array_push($subsendresultsSeven, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultEight = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 70);

        //creation of an array to put the data in
        $subsendresultsEight = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultEight)-1; $i++) {
            $subspush = array('subsname' => $subsresultEight[$i]->getSubsName(), 'subscountry' => $subsresultEight[$i]->getSubsCountry());
            array_push($subsendresultsEight, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultNine = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Desc',
        ), 10, 80);

        //creation of an array to put the data in
        $subsendresultsNine = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultNine)-1; $i++) {
            $subspush = array('subsname' => $subsresultNine[$i]->getSubsName(), 'subscountry' => $subsresultNine[$i]->getSubsCountry());
            array_push($subsendresultsNine, $subspush);
        }

        //filtering the fetched data from database with 
        //tax haven list and ordering them alphabetically
        $subsresultTen = $repository->findBy(array(
            'subscountry' => $taxhavensOxfam
        ), array(
            'subsname' => 'Asc',
        ), 10, 90);

        //creation of an array to put the data in
        $subsendresultsTen = [];
        
        //feeding the newly created array with all the data from master array
        for ($i = 0; $i <= count($subsresultTen)-1; $i++) {
            $subspush = array('subsname' => $subsresultTen[$i]->getSubsName(), 'subscountry' => $subsresultTen[$i]->getSubsCountry());
            array_push($subsendresultsTen, $subspush);
        }

        //alternative: to show the fetched data on the Twig page
        //return $this->render('procter_gamble_subs/index.html.twig', [
        //    'subs' => $subsname,
        //]);
        
        //sending the data fetched from database to the url /mondelez/subs
        return new JsonResponse([
            'PepsiCo_subs_one' => $subsendresultsOne,
            'PepsiCo_subs_two' => $subsendresultsTwo,
            'PepsiCo_subs_three' => $subsendresultsThree,
            'PepsiCo_subs_four' => $subsendresultsFour,
            'PepsiCo_subs_five' => $subsendresultsFive,
            'PepsiCo_subs_six' => $subsendresultsSix,
            'PepsiCo_subs_seven' => $subsendresultsSeven,
            'PepsiCo_subs_eight' => $subsendresultsEight,
            'PepsiCo_subs_nine' => $subsendresultsNine,
            'PepsiCo_subs_ten' => $subsendresultsTen,
        ]);

        //to add on resultsproctergamble.jsx :
        //fetchProcterGambleSubs = () => {
        //    fetch(`http://localhost:8000/mondelez/subs`).then(response => response.json()).then(response => {
        //        //console.log(response);
        //        this.setState({
        //            ProcterGambleSubs: response.ProcterGamble_subs,
        //        })
        //    });
            
        //}
    }
}
