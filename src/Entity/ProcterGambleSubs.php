<?php

namespace App\Entity;

use App\Repository\ProcterGambleSubsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProcterGambleSubsRepository::class)
 */
class ProcterGambleSubs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=70)
     */
    private $subsname;

    /**
     * @ORM\Column(type="string", length=70)
     */
    private $subscountry;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubsname(): ?string
    {
        return $this->subsname;
    }

    public function setSubsname(string $subsname): self
    {
        $this->subsname = $subsname;

        return $this;
    }

    public function getSubscountry(): ?string
    {
        return $this->subscountry;
    }

    public function setSubscountry(string $subscountry): self
    {
        $this->subscountry = $subscountry;

        return $this;
    }
}
