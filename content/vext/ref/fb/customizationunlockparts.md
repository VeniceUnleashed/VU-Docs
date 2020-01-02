---
title: CustomizationUnlockParts
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CustomizationUnlockParts()                                                          | Create a new instance of this container type.                                                                                           |
| CustomizationUnlockParts(CustomizationUnlockParts other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CustomizationUnlockParts([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CustomizationUnlockParts](CustomizationUnlockParts). |

## Properties

| Name              | Type                                   | Description |
| ----------------- | -------------------------------------- | ----------- |
| uiCategorySid     | string                                 |             |
| selectableUnlocks | [UnlockAssetBase](UnlockAssetBase)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CustomizationUnlockParts](CustomizationUnlockParts) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CustomizationUnlockParts](CustomizationUnlockParts) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
