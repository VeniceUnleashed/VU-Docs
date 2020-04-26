---
title: ScoringData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[ScoringData](#constructor-0)**() |
| **[ScoringData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ScoringData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ScoringData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scoringTypes" >}} | [ScoringTypeData](/vext/ref/fb/scoringtypedata)[] |
| {{< prop "scoringHandlers" >}} | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)[] |
| {{< prop "buckets" >}} | [ScoringBucketData](/vext/ref/fb/scoringbucketdata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScoringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScoringData {#constructor-0}
> **ScoringData**()

Creates a new [ScoringData](/vext/ref/fb/scoringdata) frostbite instance.

### ScoringData {#constructor-1}
> **ScoringData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ScoringData](/vext/ref/fb/scoringdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ScoringData {#constructor-2}
> **ScoringData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ScoringData](/vext/ref/fb/scoringdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ScoringData](/vext/ref/fb/scoringdata). |

### ScoringData {#constructor-3}
> **ScoringData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringData](/vext/ref/fb/scoringdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ScoringData](/vext/ref/fb/scoringdata). |

## Properties
### {{% prop-heading "scoringTypes" %}}
> **[ScoringTypeData](/vext/ref/fb/scoringtypedata)**[]

### {{% prop-heading "scoringHandlers" %}}
> **[ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)**[]

### {{% prop-heading "buckets" %}}
> **[ScoringBucketData](/vext/ref/fb/scoringbucketdata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScoringData](/vext/ref/fb/scoringdata) type.

