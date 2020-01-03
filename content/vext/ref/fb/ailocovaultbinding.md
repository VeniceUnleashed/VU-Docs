---
title: AILocoVaultBinding
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
| vault                   | [AntRef](/vext/ref/fb/antref/) |             |
| distanceBeforeVault     | [AntRef](/vext/ref/fb/antref/) |             |
| heightBeforeVault       | [AntRef](/vext/ref/fb/antref/) |             |
| lengthOfVaultableObject | [AntRef](/vext/ref/fb/antref/) |             |
| heightAfterVault        | [AntRef](/vext/ref/fb/antref/) |             |
| distanceAfterVault      | [AntRef](/vext/ref/fb/antref/) |             |
| vaultType               | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding/) | [Clone](#clone) |            |

### Clone

> [AILocoVaultBinding](/vext/ref/fb/ailocovaultbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
