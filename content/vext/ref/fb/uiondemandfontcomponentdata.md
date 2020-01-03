---
title: UIOnDemandFontComponentData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| UIOnDemandFontComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| UIOnDemandFontComponentData(UIOnDemandFontComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| UIOnDemandFontComponentData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIOnDemandFontComponentData](/vext/ref/fb/uiondemandfontcomponentdata/).                  |
| UIOnDemandFontComponentData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIOnDemandFontComponentData](/vext/ref/fb/uiondemandfontcomponentdata/).                                      |
| UIOnDemandFontComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIOnDemandFontComponentData](/vext/ref/fb/uiondemandfontcomponentdata/). |

## Properties

| Name            | Type                                     | Description |
| --------------- | ---------------------------------------- | ----------- |
| fontCollections | [UIFontCollection](/vext/ref/fb/uifontcollection/)\[\] |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIOnDemandFontComponentData](/vext/ref/fb/uiondemandfontcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIOnDemandFontComponentData](/vext/ref/fb/uiondemandfontcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
