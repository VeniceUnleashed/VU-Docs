---
title: ScoringTypeData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ScoringTypeData](#constructor-0)**() |
| **[ScoringTypeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ScoringTypeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "measuring" >}} | [StatEvent](/vext/ref/fb/statevent) |
| {{< prop "paramX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "paramY" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "limit" >}} | float |
| {{< prop "descriptionSid" >}} | string |
| {{< prop "visibilityType" >}} | [ScoringVisibilityType](/vext/ref/fb/scoringvisibilitytype) |
| {{< prop "bucket" >}} | [ScoringBucket](/vext/ref/fb/scoringbucket) |
| {{< prop "score" >}} | float |
| {{< prop "additionalValueMultiplier" >}} | float |
| {{< prop "showForTeam" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScoringTypeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScoringTypeData {#constructor-0}
> **ScoringTypeData**()

Creates a new [ScoringTypeData](/vext/ref/fb/scoringtypedata) frostbite instance.

### ScoringTypeData {#constructor-1}
> **ScoringTypeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ScoringTypeData](/vext/ref/fb/scoringtypedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ScoringTypeData {#constructor-2}
> **ScoringTypeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScoringTypeData](/vext/ref/fb/scoringtypedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ScoringTypeData](/vext/ref/fb/scoringtypedata). |

## Properties
### {{% prop-heading "measuring" %}}
> **[StatEvent](/vext/ref/fb/statevent)**

### {{% prop-heading "paramX" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "paramY" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "limit" %}}
> **float**

### {{% prop-heading "descriptionSid" %}}
> **string**

### {{% prop-heading "visibilityType" %}}
> **[ScoringVisibilityType](/vext/ref/fb/scoringvisibilitytype)**

### {{% prop-heading "bucket" %}}
> **[ScoringBucket](/vext/ref/fb/scoringbucket)**

### {{% prop-heading "score" %}}
> **float**

### {{% prop-heading "additionalValueMultiplier" %}}
> **float**

### {{% prop-heading "showForTeam" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScoringTypeData](/vext/ref/fb/scoringtypedata) type.

