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
        $subsname = $entityManager->getRepository(MondelezSubs::class)->findAll();
        //$subsname = $entityManager->getRepository(MondelezSubs::class)->findBy(['subsname' => $subsnames]);

        //return $this->render('mondelez_subs/index.html.twig', [
        //    'subs' => $subs,
        //]);
        
        return new JsonResponse([
            'subsname' => $subsname,
        ]);
    }
}
