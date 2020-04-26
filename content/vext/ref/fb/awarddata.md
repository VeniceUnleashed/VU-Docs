---
title: AwardData
---

Inherits from 
[AbstractAwardData](/vext/ref/fb/abstractawarddata)

## Summary
### Constructors
| |
| ----------- |
| **[AwardData](#constructor-0)**() |
| **[AwardData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AwardData](#constructor-2)**(other: [AbstractAwardData](/vext/ref/fb/abstractawarddata)) |
| **[AwardData](#constructor-3)**(other: [TreeNodeBase](/vext/ref/fb/treenodebase)) |
| **[AwardData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "filteredChildAwards" >}} | [AwardData](/vext/ref/fb/awarddata)[] |
| {{< prop "criteria" >}} | [CriteriaData](/vext/ref/fb/criteriadata)[] |
| {{< prop "code" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "kitAssociation" >}} | [AwardKitAssociation](/vext/ref/fb/awardkitassociation) |
| {{< prop "imageName" >}} | string |
| {{< prop "imageSmallName" >}} | string |
| {{< prop "imageFancyName" >}} | string |
| {{< prop "soundName" >}} | string |
| {{< prop "repeatValue" >}} | [AwardType](/vext/ref/fb/awardtype) |
| {{< prop "licenses" >}} | string[] |
| {{< prop "maxRepetitions" >}} | int |
| {{< prop "dependencies" >}} | [CriteriaAward](/vext/ref/fb/criteriaaward)[] |
| {{< prop "group" >}} | [AwardGroup](/vext/ref/fb/awardgroup) |
| {{< prop "multiplicity" >}} | [StatsMultiplicity](/vext/ref/fb/statsmultiplicity) |
| {{< prop "unlockGates" >}} | [CriteriaGateList](/vext/ref/fb/criteriagatelist) \| nil |
| {{< prop "parentAward" >}} | [AwardData](/vext/ref/fb/awarddata) \| nil |
| {{< prop "score" >}} | float |
| {{< prop "bucket" >}} | [ScoringBucket](/vext/ref/fb/scoringbucket) |
| {{< prop "unlockInfos" >}} | [BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)[] |
| {{< prop "activeOnCreation" >}} | bool |
| {{< prop "visible" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AwardData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AwardData {#constructor-0}
> **AwardData**()

Creates a new [AwardData](/vext/ref/fb/awarddata) frostbite instance.

### AwardData {#constructor-1}
> **AwardData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AwardData](/vext/ref/fb/awarddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AwardData {#constructor-2}
> **AwardData**(other: [AbstractAwardData](/vext/ref/fb/abstractawarddata))

Casts an instance of type [AbstractAwardData](/vext/ref/fb/abstractawarddata) to [AwardData](/vext/ref/fb/awarddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractAwardData](/vext/ref/fb/abstractawarddata) | The instance to cast to [AwardData](/vext/ref/fb/awarddata). |

### AwardData {#constructor-3}
> **AwardData**(other: [TreeNodeBase](/vext/ref/fb/treenodebase))

Casts an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase) to [AwardData](/vext/ref/fb/awarddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeNodeBase](/vext/ref/fb/treenodebase) | The instance to cast to [AwardData](/vext/ref/fb/awarddata). |

### AwardData {#constructor-4}
> **AwardData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardData](/vext/ref/fb/awarddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AwardData](/vext/ref/fb/awarddata). |

## Properties
### {{% prop-heading "filteredChildAwards" %}}
> **[AwardData](/vext/ref/fb/awarddata)**[]

### {{% prop-heading "criteria" %}}
> **[CriteriaData](/vext/ref/fb/criteriadata)**[]

### {{% prop-heading "code" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "kitAssociation" %}}
> **[AwardKitAssociation](/vext/ref/fb/awardkitassociation)**

### {{% prop-heading "imageName" %}}
> **string**

### {{% prop-heading "imageSmallName" %}}
> **string**

### {{% prop-heading "imageFancyName" %}}
> **string**

### {{% prop-heading "soundName" %}}
> **string**

### {{% prop-heading "repeatValue" %}}
> **[AwardType](/vext/ref/fb/awardtype)**

### {{% prop-heading "licenses" %}}
> **string**[]

### {{% prop-heading "maxRepetitions" %}}
> **int**

### {{% prop-heading "dependencies" %}}
> **[CriteriaAward](/vext/ref/fb/criteriaaward)**[]

### {{% prop-heading "group" %}}
> **[AwardGroup](/vext/ref/fb/awardgroup)**

### {{% prop-heading "multiplicity" %}}
> **[StatsMultiplicity](/vext/ref/fb/statsmultiplicity)**

### {{% prop-heading "unlockGates" %}}
> **[CriteriaGateList](/vext/ref/fb/criteriagatelist)** | **nil**

### {{% prop-heading "parentAward" %}}
> **[AwardData](/vext/ref/fb/awarddata)** | **nil**

### {{% prop-heading "score" %}}
> **float**

### {{% prop-heading "bucket" %}}
> **[ScoringBucket](/vext/ref/fb/scoringbucket)**

### {{% prop-heading "unlockInfos" %}}
> **[BasicUnlockInfo](/vext/ref/fb/basicunlockinfo)**[]

### {{% prop-heading "activeOnCreation" %}}
> **bool**

### {{% prop-heading "visible" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AwardData](/vext/ref/fb/awarddata) type.

