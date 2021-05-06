<?php

namespace App\Controller;

use App\Entity\MondelezSubs;
use App\Form\MondelezSubsType;
use App\Repository\MondelezSubsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/mondelez/subs")
 */
class MondelezSubsController extends AbstractController
{
    /**
     * @Route("/subs", name="mondelez_subs_index", methods={"GET"})
     */
    public function index(MondelezSubsRepository $mondelezSubsRepository): Response
    {
        //return $this->render('mondelez_subs/index.html.twig', [
        //    'mondelez_subs' => $mondelezSubsRepository->findAll(),
        //]);
        return new JsonResponse([
            'mondelez_subs' => $mondelezSubsRepository->findAll(),
        ]);
        
    }

    /**
     * @Route("/new", name="mondelez_subs_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $mondelezSub = new MondelezSubs();
        //$mondelezSub->setSubsId('1');
        //$mondelezSub->setSubsName('Aboli');
        //$mondelezSub->setSubsCountry('France');

        //$entityManager = $this->getDoctrine()->getManager();
        //$entityManager->persist($mondelezSub);
        //$entityManager->flush();
        $form = $this->createForm(MondelezSubsType::class, $mondelezSub);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($mondelezSub);
            $entityManager->flush();

            return $this->redirectToRoute('mondelez_subs_index');
        }

        //return new Response("Saved new Article with id" . $mondelezSub->getSubsId());

        return $this->render('mondelez_subs/new.html.twig', [
            'mondelez_sub' => $mondelezSub,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="mondelez_subs_show", methods={"GET"})
     */
    public function show(MondelezSubs $mondelezSub): Response
    {
        return $this->render('mondelez_subs/show.html.twig', [
            'mondelez_sub' => $mondelezSub,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="mondelez_subs_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, MondelezSubs $mondelezSub): Response
    {
        $form = $this->createForm(MondelezSubsType::class, $mondelezSub);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('mondelez_subs_index');
        }

        return $this->render('mondelez_subs/edit.html.twig', [
            'mondelez_sub' => $mondelezSub,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="mondelez_subs_delete", methods={"POST"})
     */
    public function delete(Request $request, MondelezSubs $mondelezSub): Response
    {
        if ($this->isCsrfTokenValid('delete'.$mondelezSub->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($mondelezSub);
            $entityManager->flush();
        }

        return $this->redirectToRoute('mondelez_subs_index');
    }
}
