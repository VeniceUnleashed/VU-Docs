---
title: SensingTemplateData
---
### Base Classes

[GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| SensingTemplateData()                                                          | Create a new instance of this container type.                                                                                 |
| SensingTemplateData(SensingTemplateData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| SensingTemplateData([GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/) other)  | Upcast an instance of type [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata/).  |
| SensingTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata/).                                      |
| SensingTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SensingTemplateData](/vext/ref/fb/sensingtemplatedata/). |

## Properties

| Name                          | Type                           | Description |
| ----------------------------- | ------------------------------ | ----------- |
| awareForgetTime               | number                         |             |
| lostForgetTime                | number                         |             |
| timeUntilUnseenIsLost         | number                         |             |
| maximumMergeDistance          | number                         |             |
| maximumAlertDistance          | number                         |             |
| maximumReadinessRaiseDistance | number                         |             |
| readyLimits                   | [SensingLimits](/vext/ref/fb/sensinglimits/) |             |
| relaxedLimits                 | [SensingLimits](/vext/ref/fb/sensinglimits/) |             |
| debugText                     | string                         |             |
| combatLimits                  | [SensingLimits](/vext/ref/fb/sensinglimits/) |             |
| useSenseSharing               | bool                           |             |
| noticeBullets                 | bool                           |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [SensingTemplateData](/vext/ref/fb/sensingtemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SensingTemplateData](/vext/ref/fb/sensingtemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
