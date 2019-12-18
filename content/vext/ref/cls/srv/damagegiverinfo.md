---
title: DamageGiverInfo (Server Class)
---
## Description

## Constructors

| Constructor                                                                                                              | Description                                              |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [DamageGiverInfo](/vext/ref/cls/srv/damagegiverinfo)()                                                                |                                                          |
| [DamageGiverInfo](/vext/ref/cls/srv/damagegiverinfo)([DamageGiverInfo](/vext/ref/cls/srv/damagegiverinfo) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                        | Type                                                | Writable | Description |
| --------------------------- | --------------------------------------------------- | -------- | ----------- |
| giver                       | [Player](/vext/ref/cls/srv/player)               | Y        |             |
| assistant                   | [Player](/vext/ref/cls/srv/player)               | Y        |             |
| weaponUnlock                | [DataContainer](/vext/ref/cls/shr/datacontainer) | Y        |             |
| physicsEntity               | [entity](/vext/ref/cls/shr/entity)               | Y        |             |
| giverControllable           | [entity](/vext/ref/cls/shr/entity)               | Y        |             |
| lockedTarget                | [entity](/vext/ref/cls/shr/entity)               | Y        |             |
| giverCharacterCustomization | [DataContainer](/vext/ref/cls/shr/datacontainer) | Y        |             |
| damageType                  | [DamageType](/vext/ref/cls/shr/damagetype)       | Y        |             |
