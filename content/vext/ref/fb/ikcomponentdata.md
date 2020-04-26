---
title: IKComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[IKComponentData](#constructor-0)**() |
| **[IKComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[IKComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[IKComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[IKComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[IKComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "ikEffector" >}} | [IKEffectorEnum](/vext/ref/fb/ikeffectorenum) |
| {{< prop "ikData" >}} | [HIKData](/vext/ref/fb/hikdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IKComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IKComponentData {#constructor-0}
> **IKComponentData**()

Creates a new [IKComponentData](/vext/ref/fb/ikcomponentdata) frostbite instance.

### IKComponentData {#constructor-1}
> **IKComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [IKComponentData](/vext/ref/fb/ikcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### IKComponentData {#constructor-2}
> **IKComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [IKComponentData](/vext/ref/fb/ikcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [IKComponentData](/vext/ref/fb/ikcomponentdata). |

### IKComponentData {#constructor-3}
> **IKComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [IKComponentData](/vext/ref/fb/ikcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [IKComponentData](/vext/ref/fb/ikcomponentdata). |

### IKComponentData {#constructor-4}
> **IKComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [IKComponentData](/vext/ref/fb/ikcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [IKComponentData](/vext/ref/fb/ikcomponentdata). |

### IKComponentData {#constructor-5}
> **IKComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IKComponentData](/vext/ref/fb/ikcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [IKComponentData](/vext/ref/fb/ikcomponentdata). |

## Properties
### {{% prop-heading "ikEffector" %}}
> **[IKEffectorEnum](/vext/ref/fb/ikeffectorenum)**

### {{% prop-heading "ikData" %}}
> **[HIKData](/vext/ref/fb/hikdata)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IKComponentData](/vext/ref/fb/ikcomponentdata) type.

