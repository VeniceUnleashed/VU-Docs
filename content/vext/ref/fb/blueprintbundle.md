---
title: BlueprintBundle
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BlueprintBundle()                                                          | Create a new instance of this container type.                                                                         |
| BlueprintBundle(BlueprintBundle other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BlueprintBundle([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BlueprintBundle](/vext/ref/fb/blueprintbundle/).                                      |
| BlueprintBundle([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintBundle](/vext/ref/fb/blueprintbundle/). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| blueprint         | [Blueprint](/vext/ref/fb/blueprint/)                 |             |
| registryContainer | [RegistryContainer](/vext/ref/fb/registrycontainer/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BlueprintBundle](/vext/ref/fb/blueprintbundle/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintBundle](/vext/ref/fb/blueprintbundle/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
