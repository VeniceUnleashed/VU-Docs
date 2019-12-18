---
title: AILocoVaultBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| AILocoVaultBinding()                         | Create a new instance of this structure type.            |
| AILocoVaultBinding(AILocoVaultBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| vault                   | [AntRef](AntRef) |             |
| distanceBeforeVault     | [AntRef](AntRef) |             |
| heightBeforeVault       | [AntRef](AntRef) |             |
| lengthOfVaultableObject | [AntRef](AntRef) |             |
| heightAfterVault        | [AntRef](AntRef) |             |
| distanceAfterVault      | [AntRef](AntRef) |             |
| vaultType               | [AntRef](AntRef) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoVaultBinding](AILocoVaultBinding) | [Clone](#clone) |            |

### Clone

> [AILocoVaultBinding](AILocoVaultBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
