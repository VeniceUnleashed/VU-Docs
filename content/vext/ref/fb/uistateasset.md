---
title: UIStateAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| UIStateAsset()                                                          | Create a new instance of this container type.                                                                   |
| UIStateAsset(UIStateAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| UIStateAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIStateAsset](UIStateAsset).                                      |
| UIStateAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIStateAsset](UIStateAsset). |

## Properties

| Name                  | Type                                   | Description |
| --------------------- | -------------------------------------- | ----------- |
| uiComponents          | [UIComponentData](UIComponentData)\[\] |             |
| actionscriptLibraries | [UIAsset](UIAsset)\[\]                 |             |
| actionscriptNames     | string\[\]                             |             |
| stateName             | string                                 |             |
| statePath             | string                                 |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [UIStateAsset](UIStateAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIStateAsset](UIStateAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
