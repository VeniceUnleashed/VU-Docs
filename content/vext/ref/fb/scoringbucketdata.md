---
title: ScoringBucketData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ScoringBucketData](#constructor-0)**() |
| **[ScoringBucketData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ScoringBucketData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "destinationBucket" >}} | [ScoringBucket](/vext/ref/fb/scoringbucket) |
| {{< prop "bucketType" >}} | [ScoringBucketType](/vext/ref/fb/scoringbuckettype) |
| {{< prop "name" >}} | string |
| {{< prop "teamTotalBucket" >}} | [ScoringBucketData](/vext/ref/fb/scoringbucketdata) \| nil |
| {{< prop "unlocks" >}} | [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)[] |
| {{< prop "connectedCategories" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)[] |
| {{< prop "addToEntry" >}} | bool |
| {{< prop "roundScore" >}} | bool |
| {{< prop "globalScore" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ScoringBucketData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ScoringBucketData {#constructor-0}

> **ScoringBucketData**()

Creates a new [ScoringBucketData](/vext/ref/fb/scoringbucketdata) frostbite instance.

### ScoringBucketData {#constructor-1}

> **ScoringBucketData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ScoringBucketData](/vext/ref/fb/scoringbucketdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ScoringBucketData {#constructor-2}

> **ScoringBucketData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ScoringBucketData](/vext/ref/fb/scoringbucketdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ScoringBucketData](/vext/ref/fb/scoringbucketdata). |

## Properties

### {{% prop-heading "destinationBucket" %}}

> **[ScoringBucket](/vext/ref/fb/scoringbucket)**

### {{% prop-heading "bucketType" %}}

> **[ScoringBucketType](/vext/ref/fb/scoringbuckettype)**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "teamTotalBucket" %}}

> **[ScoringBucketData](/vext/ref/fb/scoringbucketdata)** \| **nil**

### {{% prop-heading "unlocks" %}}

> **[ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)**[]

### {{% prop-heading "connectedCategories" %}}

> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)**[]

### {{% prop-heading "addToEntry" %}}

> **bool**

### {{% prop-heading "roundScore" %}}

> **bool**

### {{% prop-heading "globalScore" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ScoringBucketData](/vext/ref/fb/scoringbucketdata) type.

