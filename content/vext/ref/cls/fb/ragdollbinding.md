---
title: RagdollBinding (Frostbite Structure)
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
| ragdollOnBack             | [AntRef](AntRef) |             |
| ragdollBlend              | [AntRef](AntRef) |             |
| ragdollForceBlendDisabled | [AntRef](AntRef) |             |
| ragdollActiveTime         | [AntRef](AntRef) |             |
| ragdollFullyBlendedIn     | [AntRef](AntRef) |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [RagdollBinding](RagdollBinding) | [Clone](#clone) |            |

### Clone

> [RagdollBinding](RagdollBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
