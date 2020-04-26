---
title: WindComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[WindComponentData](#constructor-0)**() |
| **[WindComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WindComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[WindComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WindComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WindComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "windDirection" >}} | float |
| {{< prop "windStrength" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WindComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WindComponentData {#constructor-0}
> **WindComponentData**()

Creates a new [WindComponentData](/vext/ref/fb/windcomponentdata) frostbite instance.

### WindComponentData {#constructor-1}
> **WindComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WindComponentData](/vext/ref/fb/windcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WindComponentData {#constructor-2}
> **WindComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [WindComponentData](/vext/ref/fb/windcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [WindComponentData](/vext/ref/fb/windcomponentdata). |

### WindComponentData {#constructor-3}
> **WindComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WindComponentData](/vext/ref/fb/windcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WindComponentData](/vext/ref/fb/windcomponentdata). |

### WindComponentData {#constructor-4}
> **WindComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WindComponentData](/vext/ref/fb/windcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WindComponentData](/vext/ref/fb/windcomponentdata). |

### WindComponentData {#constructor-5}
> **WindComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WindComponentData](/vext/ref/fb/windcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WindComponentData](/vext/ref/fb/windcomponentdata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "windDirection" %}}
> **float**

### {{% prop-heading "windStrength" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WindComponentData](/vext/ref/fb/windcomponentdata) type.

