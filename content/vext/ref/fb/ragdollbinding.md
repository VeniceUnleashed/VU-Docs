---
title: RagdollBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| RagdollBinding()                     | Create a new instance of this structure type.            |
| RagdollBinding(RagdollBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                      | Type             | Description |
| ------------------------- | ---------------- | ----------- |
| ragdollOnBack             | [AntRef](/vext/ref/fb/antref/) |             |
| ragdollBlend              | [AntRef](/vext/ref/fb/antref/) |             |
| ragdollForceBlendDisabled | [AntRef](/vext/ref/fb/antref/) |             |
| ragdollActiveTime         | [AntRef](/vext/ref/fb/antref/) |             |
| ragdollFullyBlendedIn     | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [RagdollBinding](/vext/ref/fb/ragdollbinding/) | [Clone](#clone) |            |

### Clone

> [RagdollBinding](/vext/ref/fb/ragdollbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
