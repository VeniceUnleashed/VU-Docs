---
title: DataCopSettings
---


## Summary
### Constructors
| |
| ----------- |
| **[DataCopSettings](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "values" >}} | [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DataCopSettings](/vext/ref/fb/datacopsettings) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataCopSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataCopSettings {#constructor-0}
> **DataCopSettings**()

Creates a new [DataCopSettings](/vext/ref/fb/datacopsettings) frostbite structure.

## Properties
### {{% prop-heading "values" %}}
> **[DataCopValueSetting](/vext/ref/fb/datacopvaluesetting)**[]

## Methods
### Clone
> **Clone**(): [DataCopSettings](/vext/ref/fb/datacopsettings)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DataCopSettings](/vext/ref/fb/datacopsettings)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataCopSettings](/vext/ref/fb/datacopsettings) type.

