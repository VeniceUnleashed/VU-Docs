---
title: AnimatedWeaponBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                        | Description                                              |
| -------------------------------------------------- | -------------------------------------------------------- |
| AnimatedWeaponBinding()                            | Create a new instance of this structure type.            |
| AnimatedWeaponBinding(AnimatedWeaponBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                     | Type             | Description |
| ------------------------ | ---------------- | ----------- |
| deploy                   | [AntRef](AntRef) |             |
| altDeploy                | [AntRef](AntRef) |             |
| undeploy                 | [AntRef](AntRef) |             |
| quickSwitch              | [AntRef](AntRef) |             |
| reload                   | [AntRef](AntRef) |             |
| reloadShotgun            | [AntRef](AntRef) |             |
| fire                     | [AntRef](AntRef) |             |
| fireSingle               | [AntRef](AntRef) |             |
| fireHoldAndRelease       | [AntRef](AntRef) |             |
| fireSimple               | [AntRef](AntRef) |             |
| firstShotSpawned         | [AntRef](AntRef) |             |
| boltAction               | [AntRef](AntRef) |             |
| pumpAction               | [AntRef](AntRef) |             |
| meleeAttack              | [AntRef](AntRef) |             |
| quickThrow               | [AntRef](AntRef) |             |
| quickThrowType           | [AntRef](AntRef) |             |
| aimBody                  | [AntRef](AntRef) |             |
| alwaysAimHead            | [AntRef](AntRef) |             |
| oneHanded                | [AntRef](AntRef) |             |
| oneHandedAiming          | [AntRef](AntRef) |             |
| aimingEnabled            | [AntRef](AntRef) |             |
| lowerGun                 | [AntRef](AntRef) |             |
| breathControl            | [AntRef](AntRef) |             |
| rflType                  | [AntRef](AntRef) |             |
| pstlType                 | [AntRef](AntRef) |             |
| hgrType                  | [AntRef](AntRef) |             |
| atType                   | [AntRef](AntRef) |             |
| shgType                  | [AntRef](AntRef) |             |
| lmgType                  | [AntRef](AntRef) |             |
| bagType                  | [AntRef](AntRef) |             |
| snpType                  | [AntRef](AntRef) |             |
| zoom                     | [AntRef](AntRef) |             |
| aimBodyWeight            | [AntRef](AntRef) |             |
| disableZoomToggleWeight  | [AntRef](AntRef) |             |
| zoomParameter            | [AntRef](AntRef) |             |
| zoomScaleFactor          | [AntRef](AntRef) |             |
| dispersion               | [AntRef](AntRef) |             |
| aimTargetPosBody         | [AntRef](AntRef) |             |
| zoomOutSpeed             | [AntRef](AntRef) |             |
| zoomInSpeed              | [AntRef](AntRef) |             |
| unDeploySpeed            | [AntRef](AntRef) |             |
| deploySpeed              | [AntRef](AntRef) |             |
| lightEnabled             | [AntRef](AntRef) |             |
| fireModeChanged          | [AntRef](AntRef) |             |
| animType                 | [AntRef](AntRef) |             |
| gunDown                  | [AntRef](AntRef) |             |
| numberOfBulletsLeftInGun | [AntRef](AntRef) |             |
| bulletsLeftInGun         | [AntRef](AntRef) |             |
| abortVehicleDeploy       | [AntRef](AntRef) |             |
| currentProjectileIndex   | [AntRef](AntRef) |             |
| weaponActionESIG         | [AntRef](AntRef) |             |
| isSprinting              | [AntRef](AntRef) |             |
| preparingToBash          | [AntRef](AntRef) |             |
| justStartedSprinting     | [AntRef](AntRef) |             |
| kickBackInIronSight      | [AntRef](AntRef) |             |
| zoomingTime              | [AntRef](AntRef) |             |
| triggerZoomGunTwitch     | [AntRef](AntRef) |             |
| weaponChooserSignal      | [AntRef](AntRef) |             |
| weaponClassSignal        | [AntRef](AntRef) |             |
| offsetX                  | [AntRef](AntRef) |             |
| offsetY                  | [AntRef](AntRef) |             |
| offsetZ                  | [AntRef](AntRef) |             |
| aiAllowFire              | [AntRef](AntRef) |             |
| aiAltFireFromAnt         | [AntRef](AntRef) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [AnimatedWeaponBinding](AnimatedWeaponBinding) | [Clone](#clone) |            |

### Clone

> [AnimatedWeaponBinding](AnimatedWeaponBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
