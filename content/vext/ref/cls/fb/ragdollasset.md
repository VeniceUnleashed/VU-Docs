---
title: RagdollAsset (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| RagdollAsset()                                                          | Create a new instance of this container type.                                                                   |
| RagdollAsset(RagdollAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| RagdollAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [RagdollAsset](RagdollAsset).                                      |
| RagdollAsset([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [RagdollAsset](RagdollAsset). |

## Properties

| Name             | Type                                           | Description |
| ---------------- | ---------------------------------------------- | ----------- |
| materialPair     | [MaterialContainerPair](MaterialContainerPair) |             |
| useServerRagdoll | bool                                           |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [RagdollAsset](RagdollAsset) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [RagdollAsset](RagdollAsset) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
