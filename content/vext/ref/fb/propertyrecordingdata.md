---
title: PropertyRecordingData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[PropertyRecordingData](#constructor-0)**() |
| **[PropertyRecordingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PropertyRecordingData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PropertyRecordingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PropertyRecordingData {#constructor-0}
> **PropertyRecordingData**()

Creates a new [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) frostbite instance.

### PropertyRecordingData {#constructor-1}
> **PropertyRecordingData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PropertyRecordingData {#constructor-2}
> **PropertyRecordingData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata). |

## Properties
### {{% prop-heading "id" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PropertyRecordingData](/vext/ref/fb/propertyrecordingdata) type.

