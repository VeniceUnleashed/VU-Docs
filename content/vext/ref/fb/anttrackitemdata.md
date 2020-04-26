---
title: AntTrackItemData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AntTrackItemData](#constructor-0)**() |
| **[AntTrackItemData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AntTrackItemData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "controller" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "sequenceTrackIndex" >}} | int |
| {{< prop "startTime" >}} | int |
| {{< prop "numTicks" >}} | int |
| {{< prop "resumeAtEnd" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntTrackItemData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntTrackItemData {#constructor-0}
> **AntTrackItemData**()

Creates a new [AntTrackItemData](/vext/ref/fb/anttrackitemdata) frostbite instance.

### AntTrackItemData {#constructor-1}
> **AntTrackItemData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AntTrackItemData](/vext/ref/fb/anttrackitemdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AntTrackItemData {#constructor-2}
> **AntTrackItemData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntTrackItemData](/vext/ref/fb/anttrackitemdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AntTrackItemData](/vext/ref/fb/anttrackitemdata). |

## Properties
### {{% prop-heading "controller" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "sequenceTrackIndex" %}}
> **int**

### {{% prop-heading "startTime" %}}
> **int**

### {{% prop-heading "numTicks" %}}
> **int**

### {{% prop-heading "resumeAtEnd" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntTrackItemData](/vext/ref/fb/anttrackitemdata) type.

