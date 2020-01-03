---
title: AnimatedWeaponBinding
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
| deploy                   | [AntRef](/vext/ref/fb/antref/) |             |
| altDeploy                | [AntRef](/vext/ref/fb/antref/) |             |
| undeploy                 | [AntRef](/vext/ref/fb/antref/) |             |
| quickSwitch              | [AntRef](/vext/ref/fb/antref/) |             |
| reload                   | [AntRef](/vext/ref/fb/antref/) |             |
| reloadShotgun            | [AntRef](/vext/ref/fb/antref/) |             |
| fire                     | [AntRef](/vext/ref/fb/antref/) |             |
| fireSingle               | [AntRef](/vext/ref/fb/antref/) |             |
| fireHoldAndRelease       | [AntRef](/vext/ref/fb/antref/) |             |
| fireSimple               | [AntRef](/vext/ref/fb/antref/) |             |
| firstShotSpawned         | [AntRef](/vext/ref/fb/antref/) |             |
| boltAction               | [AntRef](/vext/ref/fb/antref/) |             |
| pumpAction               | [AntRef](/vext/ref/fb/antref/) |             |
| meleeAttack              | [AntRef](/vext/ref/fb/antref/) |             |
| quickThrow               | [AntRef](/vext/ref/fb/antref/) |             |
| quickThrowType           | [AntRef](/vext/ref/fb/antref/) |             |
| aimBody                  | [AntRef](/vext/ref/fb/antref/) |             |
| alwaysAimHead            | [AntRef](/vext/ref/fb/antref/) |             |
| oneHanded                | [AntRef](/vext/ref/fb/antref/) |             |
| oneHandedAiming          | [AntRef](/vext/ref/fb/antref/) |             |
| aimingEnabled            | [AntRef](/vext/ref/fb/antref/) |             |
| lowerGun                 | [AntRef](/vext/ref/fb/antref/) |             |
| breathControl            | [AntRef](/vext/ref/fb/antref/) |             |
| rflType                  | [AntRef](/vext/ref/fb/antref/) |             |
| pstlType                 | [AntRef](/vext/ref/fb/antref/) |             |
| hgrType                  | [AntRef](/vext/ref/fb/antref/) |             |
| atType                   | [AntRef](/vext/ref/fb/antref/) |             |
| shgType                  | [AntRef](/vext/ref/fb/antref/) |             |
| lmgType                  | [AntRef](/vext/ref/fb/antref/) |             |
| bagType                  | [AntRef](/vext/ref/fb/antref/) |             |
| snpType                  | [AntRef](/vext/ref/fb/antref/) |             |
| zoom                     | [AntRef](/vext/ref/fb/antref/) |             |
| aimBodyWeight            | [AntRef](/vext/ref/fb/antref/) |             |
| disableZoomToggleWeight  | [AntRef](/vext/ref/fb/antref/) |             |
| zoomParameter            | [AntRef](/vext/ref/fb/antref/) |             |
| zoomScaleFactor          | [AntRef](/vext/ref/fb/antref/) |             |
| dispersion               | [AntRef](/vext/ref/fb/antref/) |             |
| aimTargetPosBody         | [AntRef](/vext/ref/fb/antref/) |             |
| zoomOutSpeed             | [AntRef](/vext/ref/fb/antref/) |             |
| zoomInSpeed              | [AntRef](/vext/ref/fb/antref/) |             |
| unDeploySpeed            | [AntRef](/vext/ref/fb/antref/) |             |
| deploySpeed              | [AntRef](/vext/ref/fb/antref/) |             |
| lightEnabled             | [AntRef](/vext/ref/fb/antref/) |             |
| fireModeChanged          | [AntRef](/vext/ref/fb/antref/) |             |
| animType                 | [AntRef](/vext/ref/fb/antref/) |             |
| gunDown                  | [AntRef](/vext/ref/fb/antref/) |             |
| numberOfBulletsLeftInGun | [AntRef](/vext/ref/fb/antref/) |             |
| bulletsLeftInGun         | [AntRef](/vext/ref/fb/antref/) |             |
| abortVehicleDeploy       | [AntRef](/vext/ref/fb/antref/) |             |
| currentProjectileIndex   | [AntRef](/vext/ref/fb/antref/) |             |
| weaponActionESIG         | [AntRef](/vext/ref/fb/antref/) |             |
| isSprinting              | [AntRef](/vext/ref/fb/antref/) |             |
| preparingToBash          | [AntRef](/vext/ref/fb/antref/) |             |
| justStartedSprinting     | [AntRef](/vext/ref/fb/antref/) |             |
| kickBackInIronSight      | [AntRef](/vext/ref/fb/antref/) |             |
| zoomingTime              | [AntRef](/vext/ref/fb/antref/) |             |
| triggerZoomGunTwitch     | [AntRef](/vext/ref/fb/antref/) |             |
| weaponChooserSignal      | [AntRef](/vext/ref/fb/antref/) |             |
| weaponClassSignal        | [AntRef](/vext/ref/fb/antref/) |             |
| offsetX                  | [AntRef](/vext/ref/fb/antref/) |             |
| offsetY                  | [AntRef](/vext/ref/fb/antref/) |             |
| offsetZ                  | [AntRef](/vext/ref/fb/antref/) |             |
| aiAllowFire              | [AntRef](/vext/ref/fb/antref/) |             |
| aiAltFireFromAnt         | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                           | Name            | Parameters |
| ---------------------------------------------- | --------------- | ---------- |
| [AnimatedWeaponBinding](/vext/ref/fb/animatedweaponbinding/) | [Clone](#clone) |            |

### Clone

> [AnimatedWeaponBinding](/vext/ref/fb/animatedweaponbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
