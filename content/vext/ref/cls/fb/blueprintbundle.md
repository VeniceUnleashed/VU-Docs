---
title: BlueprintBundle (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundle()                                                          | Create a new instance of this container type.                                                                         |
| BlueprintBundle(BlueprintBundle other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BlueprintBundle([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BlueprintBundle](BlueprintBundle).                                      |
| BlueprintBundle([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BlueprintBundle](BlueprintBundle). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| blueprint         | [Blueprint](Blueprint)                 |             |
| registryContainer | [RegistryContainer](RegistryContainer) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundle](BlueprintBundle) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BlueprintBundle](BlueprintBundle) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
