---
title: PersistentCriteriaStatRef
---

Inherits from 
[AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)

## Summary
### Constructors
| |
| ----------- |
| **[PersistentCriteriaStatRef](#constructor-0)**() |
| **[PersistentCriteriaStatRef](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PersistentCriteriaStatRef](#constructor-2)**(other: [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref)) |
| **[PersistentCriteriaStatRef](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "criteria" >}} | [CriteriaData](/vext/ref/fb/criteriadata) \| nil |
| {{< prop "paramX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "paramY" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "criteriaOwner" >}} | [AwardData](/vext/ref/fb/awarddata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PersistentCriteriaStatRef" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PersistentCriteriaStatRef {#constructor-0}
> **PersistentCriteriaStatRef**()

Creates a new [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref) frostbite instance.

### PersistentCriteriaStatRef {#constructor-1}
> **PersistentCriteriaStatRef**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PersistentCriteriaStatRef {#constructor-2}
> **PersistentCriteriaStatRef**(other: [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref))

Casts an instance of type [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref) to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref) | The instance to cast to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref). |

### PersistentCriteriaStatRef {#constructor-3}
> **PersistentCriteriaStatRef**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref). |

## Properties
### {{% prop-heading "criteria" %}}
> **[CriteriaData](/vext/ref/fb/criteriadata)** | **nil**

### {{% prop-heading "paramX" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "paramY" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "criteriaOwner" %}}
> **[AwardData](/vext/ref/fb/awarddata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PersistentCriteriaStatRef](/vext/ref/fb/persistentcriteriastatref) type.

