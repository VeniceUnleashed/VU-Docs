---
title: GameBehaviourTemplateData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GameBehaviourTemplateData()                                                          | Create a new instance of this container type.                                                                                             |
| GameBehaviourTemplateData(GameBehaviourTemplateData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| GameBehaviourTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameBehaviourTemplateData](GameBehaviourTemplateData).                                      |
| GameBehaviourTemplateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameBehaviourTemplateData](GameBehaviourTemplateData). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameBehaviourTemplateData](GameBehaviourTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameBehaviourTemplateData](GameBehaviourTemplateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
