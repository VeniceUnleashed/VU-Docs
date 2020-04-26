---
title: CriteriaData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CriteriaData](#constructor-0)**() |
| **[CriteriaData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CriteriaData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "completionValue" >}} | float |
| {{< prop "gateList" >}} | [CriteriaGateList](/vext/ref/fb/criteriagatelist) \| nil |
| {{< prop "measuring" >}} | [StatEvent](/vext/ref/fb/statevent) |
| {{< prop "paramX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "paramY" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "orParamsX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)[] |
| {{< prop "criteriaType" >}} | [CriteriaType](/vext/ref/fb/criteriatype) |
| {{< prop "descriptionSid" >}} | string |
| {{< prop "scaleFactor" >}} | float |
| {{< prop "scale" >}} | float |
| {{< prop "shouldSummarize" >}} | bool |
| {{< prop "shouldHide" >}} | bool |
| {{< prop "countEvents" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CriteriaData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CriteriaData {#constructor-0}
> **CriteriaData**()

Creates a new [CriteriaData](/vext/ref/fb/criteriadata) frostbite instance.

### CriteriaData {#constructor-1}
> **CriteriaData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CriteriaData](/vext/ref/fb/criteriadata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CriteriaData {#constructor-2}
> **CriteriaData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CriteriaData](/vext/ref/fb/criteriadata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CriteriaData](/vext/ref/fb/criteriadata). |

## Properties
### {{% prop-heading "completionValue" %}}
> **float**

### {{% prop-heading "gateList" %}}
> **[CriteriaGateList](/vext/ref/fb/criteriagatelist)** | **nil**

### {{% prop-heading "measuring" %}}
> **[StatEvent](/vext/ref/fb/statevent)**

### {{% prop-heading "paramX" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "paramY" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "orParamsX" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)**[]

### {{% prop-heading "criteriaType" %}}
> **[CriteriaType](/vext/ref/fb/criteriatype)**

### {{% prop-heading "descriptionSid" %}}
> **string**

### {{% prop-heading "scaleFactor" %}}
> **float**

### {{% prop-heading "scale" %}}
> **float**

### {{% prop-heading "shouldSummarize" %}}
> **bool**

### {{% prop-heading "shouldHide" %}}
> **bool**

### {{% prop-heading "countEvents" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CriteriaData](/vext/ref/fb/criteriadata) type.

