---
title: AILocoCoverTaskData
---

## Summary

### Constructors

|  |
| --- |
| **[AILocoCoverTaskData](#constructor-0)**() |
| **[AILocoCoverTaskData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "wantedPos" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "threatPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "coverPose" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "waitTime" >}} | float |
| {{< prop "peekOut" >}} | [CoverPeekType](/vext/ref/fb/coverpeektype) |
| {{< prop "worldAngle" >}} | float |
| {{< prop "offsetLength" >}} | float |
| {{< prop "exitPose" >}} | [AntPoseEnum](/vext/ref/fb/antposeenum) |
| {{< prop "exitAngle" >}} | float |
| {{< prop "distanceToNextWaypoint" >}} | float |
| {{< prop "coverType" >}} | [AntCoverEnum](/vext/ref/fb/antcoverenum) |
| {{< prop "enterStrategy" >}} | [CoverEnterStrategy](/vext/ref/fb/coverenterstrategy) |
| {{< prop "exitStyle" >}} | [CoverExitStyle](/vext/ref/fb/coverexitstyle) |
| {{< prop "prepareFireType" >}} | [CoverFireType](/vext/ref/fb/coverfiretype) |
| {{< prop "forceExitCover" >}} | bool |
| {{< prop "useClientPosition" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AILocoCoverTaskData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AILocoCoverTaskData {#constructor-0}

> **AILocoCoverTaskData**()

Creates a new [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata) frostbite instance.

### AILocoCoverTaskData {#constructor-1}

> **AILocoCoverTaskData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "wantedPos" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "threatPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "coverPose" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "waitTime" %}}

> **float**

### {{% prop-heading "peekOut" %}}

> **[CoverPeekType](/vext/ref/fb/coverpeektype)**

### {{% prop-heading "worldAngle" %}}

> **float**

### {{% prop-heading "offsetLength" %}}

> **float**

### {{% prop-heading "exitPose" %}}

> **[AntPoseEnum](/vext/ref/fb/antposeenum)**

### {{% prop-heading "exitAngle" %}}

> **float**

### {{% prop-heading "distanceToNextWaypoint" %}}

> **float**

### {{% prop-heading "coverType" %}}

> **[AntCoverEnum](/vext/ref/fb/antcoverenum)**

### {{% prop-heading "enterStrategy" %}}

> **[CoverEnterStrategy](/vext/ref/fb/coverenterstrategy)**

### {{% prop-heading "exitStyle" %}}

> **[CoverExitStyle](/vext/ref/fb/coverexitstyle)**

### {{% prop-heading "prepareFireType" %}}

> **[CoverFireType](/vext/ref/fb/coverfiretype)**

### {{% prop-heading "forceExitCover" %}}

> **bool**

### {{% prop-heading "useClientPosition" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AILocoCoverTaskData](/vext/ref/fb/ailococovertaskdata) type.

