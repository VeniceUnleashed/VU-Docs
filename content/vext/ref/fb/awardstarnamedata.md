---
title: AwardStarNameData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AwardStarNameData](#constructor-0)**() |
| **[AwardStarNameData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AwardStarNameData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nameInstances" >}} | [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AwardStarNameData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AwardStarNameData {#constructor-0}
> **AwardStarNameData**()

Creates a new [AwardStarNameData](/vext/ref/fb/awardstarnamedata) frostbite instance.

### AwardStarNameData {#constructor-1}
> **AwardStarNameData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AwardStarNameData](/vext/ref/fb/awardstarnamedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AwardStarNameData {#constructor-2}
> **AwardStarNameData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AwardStarNameData](/vext/ref/fb/awardstarnamedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AwardStarNameData](/vext/ref/fb/awardstarnamedata). |

## Properties
### {{% prop-heading "nameInstances" %}}
> **[AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AwardStarNameData](/vext/ref/fb/awardstarnamedata) type.

