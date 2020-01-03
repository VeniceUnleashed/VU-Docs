---
title: GameBehaviourTemplateData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GameBehaviourTemplateData()                                                          | Create a new instance of this container type.                                                                                             |
| GameBehaviourTemplateData(GameBehaviourTemplateData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GameBehaviourTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/).                                      |
| GameBehaviourTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
