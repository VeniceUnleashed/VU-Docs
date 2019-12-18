---
title: SoldierEntity (Server Class)
---
### Base Classes

[PhysicsEntity](/vext/ref/cls/srv/physicsentity)

## Description

## Constructors

| Constructor                                                                                        | Description |
| -------------------------------------------------------------------------------------------------- | ----------- |
| [SoldierEntity](/vext/ref/cls/srv/soldierentity)([Entity](/vext/ref/cls/shr/entity) **ref**) |             |

## Static Members

| Type                                                    | Name                   | Description |
| ------------------------------------------------------- | ---------------------- | ----------- |
| [TypeInformation](/vext/ref/cls/shr/typeinformation) | SoldierEntity.typeInfo |             |

## Properties

| Name                     | Type                                                    | Writable | Description |
| ------------------------ | ------------------------------------------------------- | -------- | ----------- |
| worldTransform           | [LinearTransform](/vext/ref/cls/shr/lineartransform) |          |             |
| player                   | [Player](/vext/ref/cls/srv/player)                   |          |             |
| detailedCollisionEnabled | bool                                                    |          |             |
| physicsEnabled           | bool                                                    |          |             |
| forceInvisible           | bool                                                    |          |             |
| aimingEnabled            | bool                                                    |          |             |
| maxHealth                | float                                                   |          |             |
| waterLevel               | float                                                   |          |             |
| isManDown                | bool                                                    |          |             |
| isAlive                  | bool                                                    |          |             |
| isDead                   | bool                                                    |          |             |
| isDying                  | bool                                                    |          |             |
| isInteractiveManDown     | bool                                                    |          |             |
| isFiring                 | bool                                                    |          |             |
| isReloading              | bool                                                    |          |             |
| health                   | float                                                   |          |             |

## Operators

| Operator | Parameters                                                    |
| -------- | ------------------------------------------------------------- |
| \==      | [SoldierEntity](/vext/ref/cls/srv/soldierentity) **other** |

## Methods

| Type                                                 | Name                                                            | Parameters                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| int                                                  | [GetCurrentWeaponSlot](#getcurrentweaponslot)                   |                                                                              |
| string                                               | [GetCurrentWeaponName](#getcurrentweaponname)                   |                                                                              |
| int                                                  | [GetCurrentPrimaryAmmo](#getcurrentprimaryammo)                 |                                                                              |
| int                                                  | [GetCurrentSecondaryAmmo](#getcurrentsecondaryammo)             |                                                                              |
| int                                                  | [GetWeaponCount](#getweaponcount)                               |                                                                              |
| string                                               | [GetWeaponNameByIndex](#getweaponnamebyindex)                   | int **index**                                                                |
| int                                                  | [GetWeaponPrimaryAmmoByIndex](#getweaponprimaryammobyindex)     | int **index**                                                                |
| int                                                  | [GetWeaponSecondaryAmmoByIndex](#getweaponsecondaryammobyindex) | int **index**                                                                |
| void                                                 | [SetPosition](#setposition)                                     | [Vec3](/vext/ref/cls/shr/vec3) **position**                               |
| void                                                 | [Kill](#kill)                                                   |                                                                              |
| void                                                 | [ApplyDamage](#applydamage)                                     | [ServerDamageInfo](/vext/ref/cls/srv/serverdamageinfo) **info**           |
| void                                                 | [ApplyCustomization](#applycustomization)                       | [DataContainer](/vext/ref/cls/shr/datacontainer) **customizeSoldierData** |
| void                                                 | [SetCurrentPrimaryAmmo](#setcurrentprimaryammo)                 | int **value**                                                                |
| void                                                 | [SetCurrentSecondaryAmmo](#setcurrentsecondaryammo)             | int **value**                                                                |
| void                                                 | [SetWeaponPrimaryAmmoByIndex](#setweaponprimaryammobyindex)     | int **index**, int **value**                                                 |
| void                                                 | [SetWeaponSecondaryAmmoByIndex](#setweaponsecondaryammobyindex) | int **index**, int **value**                                                 |
| [WeaponModifier](/vext/ref/cls/fb/weaponmodifier) | [GetCurrentWeaponModifier](#getcurrentweaponmodifier)           |                                                                              |
| [WeaponModifier](/vext/ref/cls/fb/weaponmodifier) | [GetWeaponModifierByIndex](#getweaponsecondaryammobyindex)      | int **index**                                                                |

### GetCurrentWeaponSlot

> int **GetCurrentWeaponSlot**()

### GetCurrentWeaponName

> string **GetCurrentWeaponName**()

### GetCurrentPrimaryAmmo

> int **GetCurrentPrimaryAmmo**()

### GetCurrentSecondaryAmmo

> int **GetCurrentSecondaryAmmo**()

### GetWeaponCount

> int **GetWeaponCount**()

### GetWeaponNameByIndex

> string **GetWeaponNameByIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetWeaponPrimaryAmmoByIndex

> int **GetWeaponPrimaryAmmoByIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### GetWeaponSecondaryAmmoByIndex

> int **GetWeaponSecondaryAmmoByIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |

### SetPosition

> void **SetPosition**([Vec3](/vext/ref/cls/shr/vec3) **position**)

#### Parameters

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| position | [Vec3](/vext/ref/cls/shr/vec3) |             |

### Kill

> void **Kill**()

### ApplyDamage

> void **ApplyDamage**([ServerDamageInfo](/vext/ref/cls/srv/serverdamageinfo) **info**)

#### Parameters

| Name | Type                                                      | Description |
| ---- | --------------------------------------------------------- | ----------- |
| info | [ServerDamageInfo](/vext/ref/cls/srv/serverdamageinfo) |             |

### ApplyCustomization

> void **ApplyCustomization**([DataContainer](/vext/ref/cls/shr/datacontainer) **customizeSoldierData**)

#### Parameters

| Name                 | Type                                                | Description |
| -------------------- | --------------------------------------------------- | ----------- |
| customizeSoldierData | [DataContainer](/vext/ref/cls/shr/datacontainer) |             |

### SetCurrentPrimaryAmmo

> int **SetCurrentPrimaryAmmo**(int **value**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  |             |

### SetCurrentSecondaryAmmo

> int **SetCurrentSecondaryAmmo**(int **value**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| value | int  |             |

### SetWeaponPrimaryAmmoByIndex

> int **SetWeaponPrimaryAmmoByIndex**(int **index**, int **value**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |
| value | int  |             |

### SetWeaponSecondaryAmmoByIndex

> int **SetWeaponSecondaryAmmoByIndex**(int **index**, int **value**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |
| value | int  |             |

### GetCurrentWeaponModifier

> int **GetCurrentWeaponModifier**()

### GetWeaponModifierByIndex

> int **GetWeaponModifierByIndex**(int **index**)

#### Parameters

| Name  | Type | Description |
| ----- | ---- | ----------- |
| index | int  |             |
