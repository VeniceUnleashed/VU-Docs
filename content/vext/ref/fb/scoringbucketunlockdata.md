---
title: ScoringBucketUnlockData
---


## Summary
### Constructors
| |
| ----------- |
| **[ScoringBucketUnlockData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "pointsNeeded" >}} | int |
| {{< prop "unlockInfo" >}} | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScoringBucketUnlockData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScoringBucketUnlockData {#constructor-0}
> **ScoringBucketUnlockData**()

Creates a new [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) frostbite structure.

## Properties
### {{% prop-heading "pointsNeeded" %}}
> **int**

### {{% prop-heading "unlockInfo" %}}
> **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)**

## Methods
### Clone
> **Clone**(): [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScoringBucketUnlockData](/vext/ref/fb/scoringbucketunlockdata) type.

