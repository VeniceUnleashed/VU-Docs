---
title: SensingTemplateData
---
### Base Classes

[GameSensingTemplateData](GameSensingTemplateData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SensingTemplateData()                                                          | Create a new instance of this container type.                                                                                 |
| SensingTemplateData(SensingTemplateData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SensingTemplateData([GameSensingTemplateData](GameSensingTemplateData) other)  | Upcast an instance of type [GameSensingTemplateData](GameSensingTemplateData) to [SensingTemplateData](SensingTemplateData).  |
| SensingTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SensingTemplateData](SensingTemplateData).                                      |
| SensingTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingTemplateData](SensingTemplateData). |

## Properties

| Name                          | Type                           | Description |
| ----------------------------- | ------------------------------ | ----------- |
| awareForgetTime               | number                         |             |
| lostForgetTime                | number                         |             |
| timeUntilUnseenIsLost         | number                         |             |
| maximumMergeDistance          | number                         |             |
| maximumAlertDistance          | number                         |             |
| maximumReadinessRaiseDistance | number                         |             |
| readyLimits                   | [SensingLimits](SensingLimits) |             |
| relaxedLimits                 | [SensingLimits](SensingLimits) |             |
| debugText                     | string                         |             |
| combatLimits                  | [SensingLimits](SensingLimits) |             |
| useSenseSharing               | bool                           |             |
| noticeBullets                 | bool                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SensingTemplateData](SensingTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SensingTemplateData](SensingTemplateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
