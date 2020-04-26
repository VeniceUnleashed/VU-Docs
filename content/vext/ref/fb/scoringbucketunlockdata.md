---
title: ScoringBucketUnlockData
---

## Summary

### Constructors

|  |
| --- |
| **[ScoringBucketUnlockData](#constructor-0)**() |
| **[ScoringBucketUnlockData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pointsNeeded" >}} | int |
| {{< prop "unlockInfo" >}} | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ScoringBucketUnlockData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ScoringBucketUnlockData {#constructor-0}

> **ScoringBucketUnlockData**()

Creates a new [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) frostbite instance.

### ScoringBucketUnlockData {#constructor-1}

> **ScoringBucketUnlockData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "pointsNeeded" %}}

> **int**

### {{% prop-heading "unlockInfo" %}}

> **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)**

## Methods

### Clone {#clone}

> **Clone**(): [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) type.

