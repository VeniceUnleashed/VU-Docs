---
title: BlueprintBundle
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
| BlueprintBundle([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundle](BlueprintBundle). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| blueprint         | [Blueprint](Blueprint)                 |             |
| registryContainer | [RegistryContainer](RegistryContainer) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundle](BlueprintBundle) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundle](BlueprintBundle) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
