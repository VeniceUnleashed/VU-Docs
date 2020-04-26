---
title: RegularSocketObjectData
---

Inherits from 
[SocketObjectData](/vext/ref/fb/socketobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[RegularSocketObjectData](#constructor-0)**() |
| **[RegularSocketObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RegularSocketObjectData](#constructor-2)**(other: [SocketObjectData](/vext/ref/fb/socketobjectdata)) |
| **[RegularSocketObjectData](#constructor-3)**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase)) |
| **[RegularSocketObjectData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "mesh3pTransforms" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RegularSocketObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RegularSocketObjectData {#constructor-0}
> **RegularSocketObjectData**()

Creates a new [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) frostbite instance.

### RegularSocketObjectData {#constructor-1}
> **RegularSocketObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RegularSocketObjectData {#constructor-2}
> **RegularSocketObjectData**(other: [SocketObjectData](/vext/ref/fb/socketobjectdata))

Casts an instance of type [SocketObjectData](/vext/ref/fb/socketobjectdata) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectData](/vext/ref/fb/socketobjectdata) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

### RegularSocketObjectData {#constructor-3}
> **RegularSocketObjectData**(other: [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase))

Casts an instance of type [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SocketObjectDataBase](/vext/ref/fb/socketobjectdatabase) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

### RegularSocketObjectData {#constructor-4}
> **RegularSocketObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata). |

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "mesh3pTransforms" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RegularSocketObjectData](/vext/ref/fb/regularsocketobjectdata) type.

