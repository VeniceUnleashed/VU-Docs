---
title: UIOnDemandFontComponentData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UIOnDemandFontComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| UIOnDemandFontComponentData(UIOnDemandFontComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UIOnDemandFontComponentData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIOnDemandFontComponentData](UIOnDemandFontComponentData).                  |
| UIOnDemandFontComponentData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIOnDemandFontComponentData](UIOnDemandFontComponentData).                                      |
| UIOnDemandFontComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIOnDemandFontComponentData](UIOnDemandFontComponentData). |

## Properties

| Name            | Type                                     | Description |
| --------------- | ---------------------------------------- | ----------- |
| fontCollections | [UIFontCollection](UIFontCollection)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIOnDemandFontComponentData](UIOnDemandFontComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIOnDemandFontComponentData](UIOnDemandFontComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
